<template>
  <div class="network" aria-hidden="true">
    <div class="network__frame">
      <div class="network__topbar"><span /><span /><span /><b>system.graph</b></div>
      <svg viewBox="0 0 620 430" role="presentation">
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="var(--color-accent)" />
            <stop offset="1" stop-color="var(--color-accent-secondary)" />
          </linearGradient>
        </defs>
        <g class="network__lines" fill="none" stroke="url(#beam)">
          <path d="M74 112 222 72 320 174 488 102" />
          <path d="M74 112 164 286 320 174 402 328" />
          <path d="M164 286 318 368 402 328 538 260 488 102" />
          <path d="M320 174 538 260" />
        </g>
        <g class="network__nodes">
          <circle cx="74" cy="112" r="9" /><circle cx="222" cy="72" r="7" />
          <circle cx="320" cy="174" r="14" class="network__node--main" />
          <circle cx="488" cy="102" r="8" /><circle cx="164" cy="286" r="10" />
          <circle cx="318" cy="368" r="7" /><circle cx="402" cy="328" r="10" />
          <circle cx="538" cy="260" r="8" />
        </g>
        <g class="network__labels">
          <text x="53" y="91">USER</text><text x="199" y="51">RULES</text>
          <text x="288" y="146">SYSTEM</text><text x="467" y="81">DATA</text>
          <text x="130" y="324">INTERFACE</text><text x="373" y="366">AI FLOW</text>
        </g>
      </svg>
      <div class="network__status"><span>08 nodes connected</span><span class="status-dot">SYSTEM READY</span></div>
    </div>
  </div>
</template>

