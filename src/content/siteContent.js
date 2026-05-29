export const contactLinks = [
    {
        label: 'Website',
        value: 'theabhay.com',
        href: 'https://www.theabhay.com/',
    },
    {
        label: 'Contact page',
        value: 'theabhay.com/contact',
        href: 'https://www.theabhay.com/contact',
    },
    {
        label: 'Project inquiry',
        value: 'Email me directly',
        href: 'https://www.theabhay.com/#contact',
    },
    {
        label: 'Upwork profile',
        value: 'Hire on Upwork',
        href: 'https://www.theabhay.com/#contact',
    },
];

export const abhayProfile = {
    name: 'Abhay',
    headline: 'AI systems, RAG products, and workflow automation built around real business data.',
    summary:
        'Abhay builds private AI knowledge systems, document Q&A portals, support copilots, workflow automations, and LLM product features for teams that need useful software, not just experiments.',
    proof: ['5.0 Upwork signal', '100% Job Success signal', 'Fixed-scope AI builds', '30-day launch support'],
};

export const productPillars = [
    {
        title: 'RAG-grade extraction',
        text: 'Turns messy scoresheet images into structured moves while keeping the raw OCR and parsed text available for review.',
    },
    {
        title: 'Rules-aware validation',
        text: 'Uses chess logic to flag moves that cannot be played from the current position, so cleanup is fast and visible.',
    },
    {
        title: 'Replay and archive',
        text: 'Loads the extracted game onto an interactive board so players can verify the game before saving or sharing PGN.',
    },
];

export const buildProcess = [
    {
        step: '01',
        title: 'Capture',
        text: 'Upload a scanned or photographed scoresheet from a tournament, club night, coaching session, or personal archive.',
    },
    {
        step: '02',
        title: 'Extract',
        text: 'The backend OCR pipeline reads notation, normalizes move text, and returns both raw and cleaned output.',
    },
    {
        step: '03',
        title: 'Validate',
        text: 'Chess.js checks the sequence, highlights illegal moves, and lets you correct suspicious notation inline.',
    },
    {
        step: '04',
        title: 'Review',
        text: 'Step through the board, compare against the paper record, and keep a clean digital version of the game.',
    },
];

export const aiBuildServices = [
    'Private knowledge bases',
    'Document Q&A portals',
    'Support copilots',
    'Workflow automation',
    'Prompt orchestration',
    'API integration',
    'Source-grounded answers',
    'Cost-aware AI backends',
];

export const aboutSections = [
    {
        title: 'Why this exists',
        text:
            'Scoresheets are valuable chess history, but they are easy to lose and slow to enter by hand. ChessParser gives clubs, coaches, tournament players, and collectors a faster way to preserve games while still keeping human review in the loop.',
    },
    {
        title: 'How Abhay approaches builds',
        text:
            'The approach mirrors the AI systems work described on TheAbhay: define the workflow, process unstructured data, retrieve or validate grounded context, and ship a tool that a team can actually maintain.',
    },
    {
        title: 'What makes it practical',
        text:
            'The app does not hide uncertainty. It exposes OCR output, parsed text, editable moves, validation state, and board replay so the final PGN is easier to trust.',
    },
];
