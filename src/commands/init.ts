import { Command, flags } from "@oclif/command";
import * as path from "path";
import { exec, ExecException } from "child_process";
import * as fs from "fs";
import { path as __root } from "app-root-path";
import { download, __repo } from "../utils";

export default class Init extends Command {
  static description = "init a new git repository for your unity project.";

  static examples = [`$ unity-git init`];

  static flags = {
    // help: flags.help({char: 'h'}),
    // // flag with a value (-n, --name=VALUE)
    // name: flags.string({char: 'n', description: 'name to print'}),
    // // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
  };

  static args = [];

  async run() {
    const { args, flags } = this.parse(Init);

    // const name = flags.name ?? 'world'
    this.log(`Initializing git repo at ${path.resolve("./")}`);
    await this.command("git init").catch(this.handleError);

    // fs.copyFileSync(
    //   path.resolve(__root, "files/gitignore"),
    //   path.resolve("./.gitignore")
    // );
    // fs.copyFileSync(
    //   path.resolve(__root, "files/gitattributes"),
    //   path.resolve("./.gitattributes")
    // );

    this.log("Downloading .gitignore");
    await download(`${__repo}/gitignore`, path.resolve("./.gitignore")).catch(
      this.handleError
    );
    this.log("Downloading .gitattributes");
    await download(
      `${__repo}/gitattributes`,
      path.resolve("./.gitattributes")
    ).catch(this.handleError);

    this.log("Initializing git lfs");
    await this.command("git lfs install").catch(this.handleError);
  }

  private handleError = (e: ExecException | null) => {
    if (e) {
      this.error(`Failed to init repository.
        ${e.message}`);
    }
  };

  private command = (cmd: string) =>
    new Promise<void>((resolve, reject) => {
      exec(cmd, (e, stdout, stderr) => {
        if (e) {
          reject(e);
        } else resolve();
      });
    });
}
