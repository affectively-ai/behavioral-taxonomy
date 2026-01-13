# @affectively/behavioral-taxonomy

A comprehensive, structured taxonomy of **1,140+ human behavioral loops**, emotions, cognitive biases, and personality traits for affective computing applications.

[![npm version](https://img.shields.io/npm/v/@affectively/behavioral-taxonomy.svg)](https://www.npmjs.com/package/@affectively/behavioral-taxonomy)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Overview

This package provides the foundational behavioral science data structures used by the [AFFECTIVELY](https://affectively.app) platform. It categorizes human behavior into structured, machine-readable formats suitable for:

- Emotion AI / Affective Computing
- Natural Language Processing
- Behavioral Analysis
- Mental Health Applications
- Human-Computer Interaction Research
- Game Design & Narrative Systems

## Installation

```bash
npm install @affectively/behavioral-taxonomy
# or
yarn add @affectively/behavioral-taxonomy
# or
bun add @affectively/behavioral-taxonomy
```

## Quick Start

```typescript
import { 
  getBehavioralLoops, 
  getEmotions, 
  getBiases, 
  getTraits 
} from '@affectively/behavioral-taxonomy';

// Get all behavioral loops
const loops = getBehavioralLoops();
console.log(`Loaded ${loops.metadata.totalLoops} behavioral loops`);

// Find loops by category
const digitalLoops = loops.categories.find(c => c.id === 'digital-cognitive');

// Get emotion taxonomy
const emotions = getEmotions();

// Get cognitive biases
const biases = getBiases();
```

## Data Structures

### Behavioral Loops

Each loop follows a structured format:

```typescript
interface BehavioralLoop {
  id: number;
  name: string;
  logic: {
    given: string;   // Initial condition
    when: string;    // Trigger event
    then: string;    // Resulting behavior
    result: string;  // Long-term outcome
  };
  taxonomy: {
    origin: 'GENETIC' | 'BEHAVIORAL' | 'NARRATIVE' | 'DIGITAL' | 'ENVIRONMENTAL';
    modality: 'VISUAL_STATIC' | 'VISUAL_DYNAMIC' | 'AUDITORY' | 'HAPTIC' | 'OLFACTORY' | 'META' | 'PROXEMIC';
    mutability: 'IMMUTABLE' | 'STUBBORN' | 'FLUID' | 'VOLATILE';
    valences: ('ATTRACTION' | 'REPULSION' | 'DOMINANCE' | 'SUBMISSION' | 'TRUST' | 'DECEPTION' | 'DISRUPTION')[];
  };
  operator: {
    name: string;      // Named psychological mechanism
    mechanism: string; // Description of how it works
  };
  veracity: {
    objectiveGrounding: number;      // 0-1: Evidence basis
    socialConsensus: number;         // 0-1: Social agreement
    recursiveAmplification: number;  // 0-1: Self-reinforcing strength
    frictionIndex: number;           // 0-1: Resistance to change
  };
  intervention: {
    difficulty: number;  // 1-10: How hard to change
    interdict: string;   // How to block the loop
    minimize: string;    // How to reduce intensity
    recognize: string;   // How to detect it
    leverage?: string;   // How to use positively
  };
  meta: {
    tags: string[];
    relatedArchetypes?: string[];
    academicFields?: string[];
  };
}
```

### Categories

Loops are organized into 279 categories including:

- Digital & Cognitive Loops
- Dental & Oral Signals
- Dermatological & Tactile Signals
- Aging & Temporal Biomarkers
- Ocular & Gaze Signals
- Olfactory & Chemical Signals
- Micro-movement & Gait
- And many more...

## Direct JSON Access

For maximum flexibility, you can import the raw JSON data:

```typescript
// ESM
import behavioralLoops from '@affectively/behavioral-taxonomy/data/behavioral-loops';
import emotions from '@affectively/behavioral-taxonomy/data/emotions';
import biases from '@affectively/behavioral-taxonomy/data/biases';
import traits from '@affectively/behavioral-taxonomy/data/traits';

// CommonJS
const behavioralLoops = require('@affectively/behavioral-taxonomy/data/behavioral-loops');
```

## Academic Citation

If you use this dataset in academic work, please cite:

```bibtex
@dataset{affectively_behavioral_taxonomy_2026,
  author       = {AFFECTIVELY},
  title        = {Human Behavioral Loop Taxonomy},
  year         = {2026},
  publisher    = {npm},
  version      = {1.0.0},
  url          = {https://github.com/affectively-ai/behavioral-taxonomy}
}
```

## License

This dataset is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — You must give appropriate credit to AFFECTIVELY, provide a link to the license, and indicate if changes were made.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Related Packages

- [`@affectively/utils`](https://www.npmjs.com/package/@affectively/utils) - Utility functions
- [`@affectively/mcp-server-framework`](https://www.npmjs.com/package/@affectively/mcp-server-framework) - MCP server scaffolding

## Support

- [GitHub Issues](https://github.com/affectively-ai/behavioral-taxonomy/issues)
- [Documentation](https://affectively.app/docs)
- [Discord Community](https://discord.gg/affectively)

---

Made with ❤️ by [AFFECTIVELY](https://affectively.app)
