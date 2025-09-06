import { Contract, GlobalState } from "@algorandfoundation/algorand-typescript";

export class SuggestionBox extends Contract {

  // Global state to store the latest suggestion
  suggestion = GlobalState<string>({ key: "suggestion", initialValue: "" });

  // Function to add a suggestion
  AddSuggestion(title: string, message: string): string {
    this.suggestion.value = title + " - " + message;
    return title;
  }

  // Function to fetch the current suggestion
  GetSuggestion(): string {
    return this.suggestion.value;
  }
}
