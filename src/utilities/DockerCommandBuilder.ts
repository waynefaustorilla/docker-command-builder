import { CheckedState } from "@radix-ui/react-checkbox";

export default class DockerCommandBuilder {
  private commands: string[];

  constructor() {
    this.commands = [];
  }

  public setRoot(root: CheckedState | boolean) {
    if (root) {
      this.commands.push("sudo");
    }

    return this;
  }

  public setBuilder(builder: string) {
    if (builder !== "") {
      this.commands.push(builder);
    }

    return this;
  }

  public setCommand(command: string) {
    if (command) {
      this.commands.push(command);
    }

    return this;
  }

  public setContainerName(name: string) {
    if (name) {
      this.commands.push(name);
    }

    return this;
  }

  public setDetach(detach: CheckedState | boolean) {
    if (detach) {
      this.commands.push("--detach");
    }

    return this;
  }

  public setVolume(volume: string) {
    if (volume !== "") {
      this.commands.push(`--volume ${volume}`);
    }

    return this;
  }

  public setImage(image: string) {
    if (image !== "") {
      this.commands.push(image);
    }

    return this;
  }

  public build() {
    return this.commands.join(" ");
  }
}