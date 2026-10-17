let html = `
  <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
    <div>
      <span class="badge bg-primary-subtle text-primary mb-2 font-heading px-3 py-1 rounded-pill">บทเรียนที่ ${l.id}</span>
      <h2 class="fw-bold text-dark font-heading mb-0 fs-2">${l.title}</h2>
    </div>
    ${l.worksheetUrl ? `<a href="${l.worksheetUrl}" target="_blank" class="btn btn-success rounded-pill font-heading px-4 py-2 fw-medium shadow-sm"><i class="bi bi-file-earmark-arrow-down-fill me-1"></i> ดาวน์โหลดใบงานนักเรียน</a>` : ''}
  </div>
  <p class="text-secondary fs-5 mb-4 leading-relaxed">${l.desc || ''}</p>

  ${teacherHtml}
  ${scenarioVidHtml}
  ${extensionAlertHtml}
  ${makeCodeBtnHtml}          <!-- 👈 ปุ่มจะอยู่ใต้คำแนะนำ และอยู่เหนือวิดีโอทบทวน -->
  ${reviewVidsHtml}
  ${missionVidHtml}
  ${codeCheckerHtml}
`;