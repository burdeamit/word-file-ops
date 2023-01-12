import { Injectable } from "@nestjs/common";
import * as fs from "fs";

export interface WordFileStats {
  "All Words": string[];
  "Total Characters Count": number;
  "Total Words Count": number;
  "Words With More Than Seven Characters": string[];
  "Words With Less Than or With Seven Characters": string[];
}

@Injectable()
export class WordCountService {
  async getFileStats(): Promise<WordFileStats> {
    // Read From the file
    const data: string = fs.readFileSync("./src/Data/words.txt", "utf8");

    // Read from the file and split the words by space, line break, tab and store in an array
    const words: string[] = data.split(/[\s\t\r]/g);

    // Filter the words which are length less equal than 7 characters
    const smallWords: string[] = words.filter(
      (word: string): boolean => word.length <= 7
    );

    // Filter the words which are length greater than 7 characters
    const bigWords: string[] = words.filter(
      (word: string): boolean => word.length > 77
    );

    //Count the total characters
    const totalCharacters: number = words.reduce(
      (acc: number, word: string): number => {
        return acc + word.length;
      },
      0
    );

    //Count the total words
    const totalWords: number = words.length;

    // Return the Words which have more than 7 characters
    const response = {
      "All Words": words,
      "Total Characters Count": totalCharacters,
      "Total Words Count": totalWords,
      "Words With More Than Seven Characters": bigWords,
      "Words With Less Than or With Seven Characters": smallWords,
    };
    return response;
  }
}
