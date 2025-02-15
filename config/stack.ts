import { Colors } from './colors';

export enum Stack {
  // Languages
  java,
  javascript,
  typescript,
  python,

  // Frontend
  react,

  // Backend
  springboot,
  node,

  // Cloud
  ibmcloud,
  azure,
  aws,

  // Messaging
  kafka,

  // Databases
  db2,
  redis,
  postgres,
  mongo,

  // Tools
  docker,
  kubernetes,

  //AI tooling
  langchain,
}

export const WorkStack = [
  Stack.java,
  Stack.springboot,
  Stack.typescript,
  Stack.python,
  Stack.react,
  Stack.aws,
  Stack.azure,
  Stack.kubernetes,
  Stack.docker,
  Stack.kafka,
  Stack.db2,
  Stack.postgres,
  Stack.ibmcloud,
  Stack.langchain,
  Stack.node,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.springboot]: {
    value: 'Spring Boot',
    color: Colors.springboot,
  },
  [Stack.node]: {
    value: 'Node.js',
    color: Colors.node,
  },
  [Stack.db2]: {
    value: 'DB2',
    color: Colors.db2,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.azure]: {
    value: 'Azure',
    color: Colors.azure,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.ibmcloud]: {
    value: 'IBM Cloud',
    color: Colors.ibmcloud,
  },
  [Stack.langchain]: {
    value: 'LangChain',
    color: Colors.langchain,
  },
};
