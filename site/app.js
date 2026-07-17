const state = {
  index: [],
  records: [],
  reviews: [],
  selectedId: null,
};

const statusLabels = {
  draft: "Draft",
  needs_primary_source_check: "Broncheck nodig",
  source_checked: "Brongecheckt",
  expert_review_requested: "Expertreview gevraagd",
  expert_reviewed: "Expertreview verwerkt",
  published: "Gepubliceerd",
};

const statusExplanations = {
  draft: "Werkversie. Gebruik dit alleen als intern onderzoeksspoor.",
  needs_primary_source_check:
    "Discovery-item. Primaire bronnen en claimgrenzen moeten nog worden gecontroleerd.",
  source_checked:
    "Bron en kernclaim zijn gecontroleerd, maar dit is nog geen gepubliceerde claim.",
  expert_review_requested:
    "Pre-review. Een domeinexpert moet claimgrens, terminologie of interpretatie nog toetsen.",
  expert_reviewed: "Expertfeedback is verwerkt. Controleer nog steeds de itemcontext.",
  published: "Voldoet aan de publicatiecriteria van deze evidence map.",
};

const checkedStatuses = new Set([
  "source_checked",
  "expert_review_requested",
  "expert_reviewed",
  "published",
]);

const els = {
  repoStatus: document.querySelector("#repoStatus"),
  metricRecords: document.querySelector("#metricRecords"),
  metricChecked: document.querySelector("#metricChecked"),
  metricExpert: document.querySelector("#metricExpert"),
  metricMsResearch: document.querySelector("#metricMsResearch"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  levelFilter: document.querySelector("#levelFilter"),
  contextFilter: document.querySelector("#contextFilter"),
  outcomeFilter: document.querySelector("#outcomeFilter"),
  resultCount: document.querySelector("#resultCount"),
  recordList: document.querySelector("#recordList"),
  recordDetail: document.querySelector("#recordDetail"),
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...body] = rows.filter((item) => item.some(Boolean));
  return body.map((items) =>
    Object.fromEntries(headers.map((header, index) => [header, items[index] || ""])),
  );
}

async function fetchText(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${path}: ${response.status}`);
  }
  return response.text();
}

async function fetchJson(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`${path}: ${response.status}`);
  }
  return response.json();
}

function uniqueValues(items, getter) {
  return [...new Set(items.flatMap(getter).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "nl"),
  );
}

function fillSelect(select, values, labels = {}) {
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labels[value] || value;
    select.append(option);
  }
}

function recordSearchText(record) {
  return [
    record.id,
    record.title,
    record.category,
    record.subcategory,
    record.review_status,
    record.evidence_level,
    record.evidence_label,
    record.patient_summary,
    record.clinical_summary,
    record.research_summary,
    ...(record.ms_context || []),
    ...(record.outcomes || []),
    ...(record.open_questions || []),
    ...(record.sources || []).flatMap((source) => [source.url, source.claim, source.type]),
  ]
    .join(" ")
    .toLowerCase();
}

function activeFilters() {
  return {
    search: els.searchInput.value.trim().toLowerCase(),
    status: els.statusFilter.value,
    category: els.categoryFilter.value,
    level: els.levelFilter.value,
    context: els.contextFilter.value,
    outcome: els.outcomeFilter.value,
  };
}

function filteredRecords() {
  const filters = activeFilters();
  return state.records.filter((record) => {
    const categories = String(record.category || "").split(";");
    const contexts = record.ms_context || [];
    const outcomes = record.outcomes || [];
    const matchesSearch = !filters.search || recordSearchText(record).includes(filters.search);
    const matchesStatus = filters.status === "all" || record.review_status === filters.status;
    const matchesCategory = filters.category === "all" || categories.includes(filters.category);
    const matchesLevel = filters.level === "all" || record.evidence_level === filters.level;
    const matchesContext = filters.context === "all" || contexts.includes(filters.context);
    const matchesOutcome = filters.outcome === "all" || outcomes.includes(filters.outcome);
    return (
      matchesSearch &&
      matchesStatus &&
      matchesCategory &&
      matchesLevel &&
      matchesContext &&
      matchesOutcome
    );
  });
}

function chip(text, className = "") {
  const span = document.createElement("span");
  span.className = `chip ${className}`.trim();
  span.textContent = text;
  return span;
}

function renderMetrics() {
  els.metricRecords.textContent = state.records.length;
  els.metricChecked.textContent = state.records.filter((record) =>
    checkedStatuses.has(record.review_status),
  ).length;
  els.metricExpert.textContent = state.records.filter(
    (record) => record.review_status === "expert_review_requested",
  ).length;
  els.metricMsResearch.textContent = state.records.filter((record) =>
    record.id.startsWith("msresearch-"),
  ).length;
}

function renderList() {
  const records = filteredRecords();
  els.recordList.replaceChildren();
  els.resultCount.textContent = `${records.length} zichtbaar`;

  if (!records.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Geen records voor deze filters.";
    empty.style.padding = "14px";
    els.recordList.append(empty);
    renderDetail(null);
    return;
  }

  if (!records.some((record) => record.id === state.selectedId)) {
    state.selectedId = records[0].id;
  }

  for (const record of records) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `record-card ${record.id === state.selectedId ? "active" : ""}`;
    button.addEventListener("click", () => {
      state.selectedId = record.id;
      renderList();
      renderDetail(record);
    });

    const title = document.createElement("div");
    title.className = "record-title";
    title.textContent = record.title;

    const meta = document.createElement("div");
    meta.className = "record-meta";
    meta.append(
      chip(statusLabels[record.review_status] || record.review_status, `status-${record.review_status}`),
      chip(`Niveau ${record.evidence_level}`),
      chip(record.category),
    );

    const next = document.createElement("p");
    next.className = "empty-state";
    next.textContent = record.next_action || record.evidence_label || "";

    button.append(title, meta, next);
    els.recordList.append(button);
  }

  renderDetail(state.records.find((record) => record.id === state.selectedId) || records[0]);
}

function textBlock(title, text) {
  const block = document.createElement("article");
  block.className = "summary-block";
  const heading = document.createElement("h4");
  heading.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = text || "Niet ingevuld.";
  block.append(heading, paragraph);
  return block;
}

function renderSources(record) {
  const wrap = document.createElement("section");
  wrap.className = "source-list";
  const heading = document.createElement("h4");
  heading.textContent = "Bronnen";
  wrap.append(heading);

  for (const source of record.sources || []) {
    const item = document.createElement("div");
    item.className = "source-item";
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.url;
    const claim = document.createElement("p");
    claim.textContent = source.claim;
    item.append(link, chip(source.type || "source"), claim);
    wrap.append(item);
  }

  return wrap;
}

function renderReview(record) {
  const review = state.reviews.find((item) => item.item_id === record.id);
  if (!review) {
    return null;
  }

  const wrap = document.createElement("section");
  wrap.className = "review-box";
  const heading = document.createElement("h4");
  heading.textContent = "Expertreview";
  const question = document.createElement("p");
  question.textContent = review.review_question;
  const meta = document.createElement("div");
  meta.className = "chip-row";
  meta.append(chip(review.risk_level), chip(review.queue_status), chip(review.source_basis));
  wrap.append(heading, question, meta);
  return wrap;
}

function renderPublicationGate(record) {
  const review = state.reviews.find((item) => item.item_id === record.id);
  const isPreReview = record.review_status === "expert_review_requested";
  const isPublished = record.review_status === "published";
  const wrap = document.createElement("section");
  wrap.className = `publication-gate ${isPreReview ? "pre-review" : ""}`;

  const heading = document.createElement("h4");
  heading.textContent = isPublished ? "Publicatiestatus" : "Publicatiegate";

  const summary = document.createElement("p");
  summary.textContent =
    statusExplanations[record.review_status] ||
    "Reviewstatus is bekend, maar heeft nog geen aparte toelichting.";

  const checks = document.createElement("ul");
  const items = [
    record.medical_disclaimer || "Researchinformatie, geen medisch advies.",
    record.evidence_label
      ? `Claimgrens: ${record.evidence_label}`
      : "Claimgrens ontbreekt nog in dit record.",
  ];

  if (isPreReview && review) {
    items.push(`Open expertvraag: ${review.review_question}`);
    items.push(`Volgende actie: ${review.next_action}`);
  } else if (!isPublished) {
    items.push(record.next_action ? `Volgende actie: ${record.next_action}` : "Volgende actie ontbreekt.");
  }

  for (const itemText of items) {
    const item = document.createElement("li");
    item.textContent = itemText;
    checks.append(item);
  }

  wrap.append(heading, summary, checks);
  return wrap;
}

function renderQuestions(record) {
  const wrap = document.createElement("section");
  wrap.className = "question-list";
  const heading = document.createElement("h4");
  heading.textContent = "Open vragen";
  const list = document.createElement("ul");
  for (const question of record.open_questions || []) {
    const item = document.createElement("li");
    item.textContent = question;
    list.append(item);
  }
  wrap.append(heading, list);
  return wrap;
}

function renderDetail(record) {
  els.recordDetail.replaceChildren();

  if (!record) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Selecteer een record.";
    els.recordDetail.append(empty);
    return;
  }

  const header = document.createElement("div");
  header.className = "detail-header";

  const row = document.createElement("div");
  row.className = "detail-title-row";
  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = record.title;
  const id = document.createElement("p");
  id.className = "empty-state";
  id.textContent = record.id;
  titleWrap.append(title, id);
  const level = document.createElement("div");
  level.className = "level-badge";
  level.textContent = record.evidence_level || "?";
  row.append(titleWrap, level);

  const chips = document.createElement("div");
  chips.className = "chip-row";
  chips.append(
    chip(statusLabels[record.review_status] || record.review_status, `status-${record.review_status}`),
    chip(record.category || "categorie onbekend"),
    chip((record.ms_context || []).join("; ") || "MS-context onbekend"),
    chip(`Reviewdatum ${record.last_reviewed || "onbekend"}`),
  );
  header.append(row, chips);

  const summaries = document.createElement("section");
  summaries.className = "summary-grid";
  summaries.append(
    textBlock("Patiententaal", record.patient_summary),
    textBlock("Klinisch", record.clinical_summary),
    textBlock("Mechanisme", record.mechanism_summary),
    textBlock("Onderzoek", record.research_summary || record.evidence_label),
  );

  els.recordDetail.append(header, renderPublicationGate(record), summaries);
  const review = renderReview(record);
  if (review) {
    els.recordDetail.append(review);
  }
  els.recordDetail.append(renderQuestions(record), renderSources(record));
}

function attachFilters() {
  for (const control of [
    els.searchInput,
    els.statusFilter,
    els.categoryFilter,
    els.levelFilter,
    els.contextFilter,
    els.outcomeFilter,
  ]) {
    control.addEventListener("input", renderList);
  }
}

async function init() {
  try {
    const indexRows = parseCsv(await fetchText("data/index.csv"));
    const reviews = parseCsv(await fetchText("data/expert-review-queue.csv"));
    const records = await Promise.all(
      indexRows
        .filter((row) => row.record_path)
        .map(async (row) => ({ ...row, ...(await fetchJson(row.record_path)) })),
    );

    state.index = indexRows;
    state.reviews = reviews;
    state.records = records.sort((a, b) => {
      const statusOrder = a.review_status.localeCompare(b.review_status, "nl");
      return statusOrder || a.title.localeCompare(b.title, "nl");
    });
    state.selectedId = state.records[0]?.id || null;

    fillSelect(
      els.statusFilter,
      uniqueValues(state.records, (record) => [record.review_status]),
      statusLabels,
    );
    fillSelect(
      els.categoryFilter,
      uniqueValues(state.records, (record) => String(record.category || "").split(";")),
    );
    fillSelect(els.levelFilter, uniqueValues(state.records, (record) => [record.evidence_level]));
    fillSelect(els.contextFilter, uniqueValues(state.records, (record) => record.ms_context || []));
    fillSelect(els.outcomeFilter, uniqueValues(state.records, (record) => record.outcomes || []));

    renderMetrics();
    attachFilters();
    renderList();
    els.repoStatus.textContent = "Data geladen";
  } catch (error) {
    els.repoStatus.textContent = "Datafout";
    const message = document.createElement("p");
    message.className = "error";
    message.textContent = `Data kon niet laden: ${error.message}`;
    els.recordDetail.replaceChildren(message);
  }
}

init();
