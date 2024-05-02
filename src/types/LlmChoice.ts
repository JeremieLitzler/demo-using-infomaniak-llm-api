import LlmInput from './LlmInput';

export default interface LlmChoice {
  index: number;
  message: LlmInput;
  finish_reason: string;
}
