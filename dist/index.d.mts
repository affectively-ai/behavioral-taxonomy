/**
 * @affectively/behavioral-taxonomy
 *
 * A comprehensive taxonomy of human behavioral loops, emotions,
 * cognitive biases, and personality traits.
 *
 * @license CC-BY-4.0
 * @see https://github.com/affectively-ai/behavioral-taxonomy
 */
interface BehavioralLoopLogic {
    given: string;
    when: string;
    then: string;
    result: string;
}
type LoopOrigin = 'GENETIC' | 'BEHAVIORAL' | 'NARRATIVE' | 'DIGITAL' | 'ENVIRONMENTAL';
type LoopModality = 'VISUAL_STATIC' | 'VISUAL_DYNAMIC' | 'AUDITORY' | 'HAPTIC' | 'OLFACTORY' | 'META' | 'PROXEMIC';
type LoopMutability = 'IMMUTABLE' | 'STUBBORN' | 'FLUID' | 'VOLATILE';
type LoopValence = 'ATTRACTION' | 'REPULSION' | 'DOMINANCE' | 'SUBMISSION' | 'TRUST' | 'DECEPTION' | 'DISRUPTION';
interface LoopTaxonomy {
    origin: LoopOrigin;
    modality: LoopModality;
    mutability: LoopMutability | number;
    valences: LoopValence[];
}
interface LoopOperator {
    name: string;
    mechanism: string;
}
interface LoopVeracity {
    objectiveGrounding: number;
    socialConsensus: number;
    recursiveAmplification: number;
    frictionIndex: number;
}
interface LoopIntervention {
    difficulty: number;
    interdict?: string;
    minimize?: string;
    recognize?: string;
    leverage?: string;
}
interface LoopMeta {
    tags: string[];
    relatedArchetypes?: string[];
    academicFields?: string[];
}
interface BehavioralLoop {
    id: number;
    name: string;
    logic: BehavioralLoopLogic;
    taxonomy: LoopTaxonomy;
    operator: LoopOperator;
    veracity: LoopVeracity;
    intervention: LoopIntervention;
    meta: LoopMeta;
}
interface BehavioralCategory {
    id: string;
    categoryNumber: number;
    name: string;
    description: string;
    loops: BehavioralLoop[];
}
interface BehavioralLoopsMetadata {
    title: string;
    version: string;
    description: string;
    totalCategories: number;
    totalLoops: number;
    generatedAt: string;
    interventionsAdded: number;
    updatedAt: string;
}
interface BehavioralLoopsData {
    metadata: BehavioralLoopsMetadata;
    categories: BehavioralCategory[];
}
interface Emotion {
    id: string;
    name: string;
    description: string;
    level: 'primary' | 'secondary' | 'tertiary';
    valence: 'positive' | 'negative' | 'neutral';
    arousal: 'high' | 'medium' | 'low';
    ekmanCategory?: string;
    relatedEmotions?: string[];
}
interface CognitiveBias {
    id: string;
    name: string;
    definition: string;
    category: string;
    examples?: string[];
    relatedBiases?: string[];
}
interface PersonalityTrait {
    id: string;
    name: string;
    definition: string;
    dimension?: string;
    opposingTrait?: string;
}
/**
 * Get the complete behavioral loops dataset
 */
declare function getBehavioralLoops(): BehavioralLoopsData;
/**
 * Get all behavioral loops as a flat array
 */
declare function getAllLoops(): BehavioralLoop[];
/**
 * Get loops by category ID
 */
declare function getLoopsByCategory(categoryId: string): BehavioralLoop[];
/**
 * Find loops by tag
 */
declare function findLoopsByTag(tag: string): BehavioralLoop[];
/**
 * Find loops by origin type
 */
declare function findLoopsByOrigin(origin: LoopOrigin): BehavioralLoop[];
/**
 * Get a single loop by ID
 */
declare function getLoopById(id: number): BehavioralLoop | undefined;
/**
 * Search loops by name or description
 */
declare function searchLoops(query: string): BehavioralLoop[];
/**
 * Get the emotions dataset
 */
declare function getEmotions(): Emotion[];
/**
 * Get cognitive biases dataset
 */
declare function getBiases(): CognitiveBias[];
/**
 * Get personality traits dataset
 */
declare function getTraits(): PersonalityTrait[];
/**
 * Get statistics about the behavioral loops dataset
 */
declare function getStatistics(): {
    totalLoops: number;
    totalCategories: number;
    loopsByOrigin: Record<LoopOrigin, number>;
    averageInterventionDifficulty: number;
};
declare const _default: {
    getBehavioralLoops: typeof getBehavioralLoops;
    getAllLoops: typeof getAllLoops;
    getLoopsByCategory: typeof getLoopsByCategory;
    findLoopsByTag: typeof findLoopsByTag;
    findLoopsByOrigin: typeof findLoopsByOrigin;
    getLoopById: typeof getLoopById;
    searchLoops: typeof searchLoops;
    getEmotions: typeof getEmotions;
    getBiases: typeof getBiases;
    getTraits: typeof getTraits;
    getStatistics: typeof getStatistics;
};

export { type BehavioralCategory, type BehavioralLoop, type BehavioralLoopLogic, type BehavioralLoopsData, type BehavioralLoopsMetadata, type CognitiveBias, type Emotion, type LoopIntervention, type LoopMeta, type LoopModality, type LoopMutability, type LoopOperator, type LoopOrigin, type LoopTaxonomy, type LoopValence, type LoopVeracity, type PersonalityTrait, _default as default, findLoopsByOrigin, findLoopsByTag, getAllLoops, getBehavioralLoops, getBiases, getEmotions, getLoopById, getLoopsByCategory, getStatistics, getTraits, searchLoops };
