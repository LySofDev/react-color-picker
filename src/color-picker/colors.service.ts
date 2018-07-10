export default class ColorsService {

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
