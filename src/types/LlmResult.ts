import LlmChoice from './LlmChoice';
import LlmUsage from './LlmUsage';

export default interface LlmResult {
  model: string;
  choices: LlmChoice[];
  usage: LlmUsage;
}
