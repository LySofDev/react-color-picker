export default class ColorsService {

  /**
   * Provide the colors to be used
   * @returns The HEX colors as a Promise resolving to a list of strings
   */
  public getColors(): Promise<string[]> {
    return new Promise((resolve: (value?: string[]) => void) => {
      resolve([
        "#450c41",
        "#61275d",
        "#86b5d5",
        "#2c7f84",
        "#224a72",
      ]);
    });
  }

}
