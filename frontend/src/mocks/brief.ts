export type Source = {
  id: string
  title: string
  authors: string
  year: number
  venue: string
}

export type Claim = {
  claim: string
  evidence: string
  source: string
}

export type ResearchBrief = {
  id: string
  query: string
  generatedAt: string
  concepts: string[]
  tldr: string
  claims: Claim[]
  readingOrder: string[]
  openQuestions: string[]
  sources: Source[]
}

export const suggestedPrompts: string[] = [
  'How is RAG evaluation usually done?',
  'What are the main approaches to dense passage retrieval?',
  'How does LLM-as-judge compare to human evaluation?',
]

export const mockBrief: ResearchBrief = {
  id: 'mock-brief-1',
  query: 'How is RAG evaluation usually done?',
  generatedAt: '2026-07-13',
  concepts: ['Context Precision', 'Faithfulness', 'Answer Relevance', 'nDCG@k', 'LLM-as-Judge'],
  tldr: 'RAG systems are typically evaluated along two axes: retrieval quality (whether the right passages were found) and generation quality (whether the answer is faithful to those passages and relevant to the question). Retrieval is scored with ranking metrics like nDCG@k and context precision, while generation faithfulness and relevance are increasingly scored by an LLM-as-judge rather than exact-match metrics, since research answers rarely have a single correct phrasing.',
  claims: [
    {
      claim: 'Dense retrievers outperform sparse (BM25) retrieval on open-domain QA benchmarks.',
      evidence:
        'DPR trained with in-batch negatives beats BM25 on 4 of 5 QA datasets by wide margins.',
      source: 'Karpukhin et al., 2020',
    },
    {
      claim: 'Faithfulness should be measured separately from answer relevance.',
      evidence:
        'A generated answer can be relevant to the question while contradicting its retrieved sources, so the two must be scored independently.',
      source: 'Es et al., 2023',
    },
    {
      claim: 'LLM-as-judge correlates well with human judgment for RAG answer quality.',
      evidence:
        'GPT-4-based judges reach human-level agreement on faithfulness and relevance annotations in the RAGAS study.',
      source: 'Es et al., 2023',
    },
    {
      claim: 'Ranking metrics like nDCG@k remain the standard for retrieval-stage evaluation.',
      evidence:
        'nDCG@k rewards retrievers for placing the most relevant passages earliest, matching how downstream generation consumes context.',
      source: 'Thakur et al., 2021',
    },
  ],
  readingOrder: [
    'Karpukhin et al., 2020 — dense retrieval baseline',
    'Thakur et al., 2021 — retrieval benchmarking (BEIR)',
    'Es et al., 2023 — RAG-specific evaluation (RAGAS)',
  ],
  openQuestions: [
    'How well do these metrics transfer to multi-hop research questions?',
    'Is LLM-as-judge reliable across domains outside general QA?',
  ],
  sources: [
    {
      id: 'karpukhin-2020',
      title: 'Dense Passage Retrieval for Open-Domain Question Answering',
      authors: 'Karpukhin et al.',
      year: 2020,
      venue: 'EMNLP',
    },
    {
      id: 'thakur-2021',
      title:
        'BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models',
      authors: 'Thakur et al.',
      year: 2021,
      venue: 'NeurIPS',
    },
    {
      id: 'es-2023',
      title: 'RAGAS: Automated Evaluation of Retrieval Augmented Generation',
      authors: 'Es et al.',
      year: 2023,
      venue: 'arXiv',
    },
    {
      id: 'lewis-2020',
      title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      authors: 'Lewis et al.',
      year: 2020,
      venue: 'NeurIPS',
    },
    {
      id: 'izacard-2022',
      title: 'Few-shot Learning with Retrieval Augmented Language Models',
      authors: 'Izacard et al.',
      year: 2022,
      venue: 'JMLR',
    },
    {
      id: 'shi-2023',
      title: 'REPLUG: Retrieval-Augmented Black-Box Language Models',
      authors: 'Shi et al.',
      year: 2023,
      venue: 'arXiv',
    },
  ],
}
