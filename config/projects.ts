import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Muzik',
    slug: 'muzik',
    banner: '/static/projects/muzik/banner.jpeg',
    website: 'https://github.com/tarishigeetey/muzik',
    description:
      'A mood-based music recommendation app, powered by Spotify and Hugging Face NLP model.Currently going through "invite-only beta testing"',
    shortDescription: 'A mood-based music recommendation app',
    repository: 'https://github.com/tarishigeetey/muzik',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.java,
      Stack.docker,
      Stack.springboot,
      Stack.azure,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/muzik/muzik_login.jpeg',
      '/static/projects/muzik/muzik_search.jpeg',
      '/static/projects/muzik/muzik_loading.jpeg',
      '/static/projects/muzik/muzik_results.jpeg',
    ],
    deployment: {
      web: 'https://muzik-nine.vercel.app',
    },
    subProjects: [],
  },
  {
    title: 'Lexa : #situatonal conversional ai',
    slug: 'lexa',
    banner: '/static/projects/lexa/banner.jpeg',
    website: 'https://lexa-ui-two.vercel.app',
    description: `Lexa is a situational AI for immersive German learning, offering role-based voice interactions, translations, and adaptive dialogues for real-life scenarios.`,
    shortDescription: 'Lexa is a situational AI for immersive German learning.',
    repository: 'https://github.com/tarishigeetey/lexa',
    stack: [Stack.javascript, Stack.react],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/lexa/banner.jpeg',
      '/static/projects/lexa/lexa_front.jpeg',
    ],
    deployment: {
      web: 'https://lexa-ui-two.vercel.app',
    },
    subProjects: [],
  },
  {
    title: 'GitBuddy',
    slug: 'gitbuddy',
    banner: '/static/projects/gitbuddy/banner.png',
    website: 'https://github.com/tarishigeetey/gitbuddy',
    description: `GitBuddy is an AI-powered coding assistant for GitHub. It uses RAG and LangChain to provide code suggestions, explanations, and insights from your repository. GitBuddy can search code, analyze issues and pull requests, and answer specific queries, all based on your repo’s data.`,
    shortDescription: 'GitBuddy is an AI-powered coding assistant for GitHub.',
    repository: 'https://github.com/tarishigeetey/gitbuddy',
    stack: [Stack.python, Stack.langchain],
    screenshots: [],
    deployment: {
      web: 'https://github.com/tarishigeetey/gitbuddy',
    },
    subProjects: [],
  },
  {
    title: 'Databridge',
    slug: 'databridge',
    banner: '/static/projects/databridge/banner.png',
    website: 'https://github.com/tarishigeetey/databridge',
    description: `DataBridge is a flexible Node.js script designed to facilitate data migration between different types of databases, such as MySQL, PostgreSQL, MongoDB, etc. It allows seamless transfer of data from a source database to a destination database, making it perfect for data backup, synchronization, or system migrations.`,
    shortDescription: 'Data migration tool from one DB to another.',
    repository: 'https://github.com/tarishigeetey/databridge',
    stack: [Stack.javascript, Stack.node],
    screenshots: [],
    deployment: {
      web: 'https://github.com/tarishigeetey/databridge',
    },
    subProjects: [],
  },
  {
    title: 'Kafka-Bridge',
    slug: 'kafka-bridge',
    banner: '/static/projects/kafka-bridge/banner.png',
    website: 'https://github.com/tarishigeetey/kafka-bridge',
    description: `Kafka-bridge is a reusable Kafka-based Producer-Consumer library for Java microservices. It simplifies Kafka integration by providing easy-to-configure producer and consumer services, as well as automatic topic creation and centralized logging.`,
    shortDescription:
      'Kafka-bridge is a reusable kafla producer consumer liberary.',
    repository: 'https://github.com/tarishigeetey/kafka-bridge',
    stack: [Stack.java, Stack.springboot, Stack.kafka],
    screenshots: [],
    deployment: {
      web: 'https://github.com/tarishigeetey/kafka-bridge',
    },
    subProjects: [],
  },
];
