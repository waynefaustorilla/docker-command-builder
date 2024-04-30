import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckedState } from "@radix-ui/react-checkbox";
import DockerCommandBuilder from "@/utilities/DockerCommandBuilder";
import FormInput from "@/components/FormInput";
import FormCheckbox from "@/components/FormCheckbox";

const Application: React.FunctionComponent = () => {
  const [root, setRoot] = React.useState<CheckedState>(false);
  const [builder, setBuilder] = React.useState<string>("docker");
  const [command, setCommand] = React.useState<string>("");
  const [detach, setDetach] = React.useState<CheckedState>(false);
  const [volume, setVolume] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [containerName, setContainerName] = React.useState<string>("");

  const dockerCommand = React.useMemo(() => {
    const commandBuilder = new DockerCommandBuilder();

    commandBuilder.setRoot(root);
    commandBuilder.setBuilder(builder);
    commandBuilder.setCommand(command);
    commandBuilder.setContainerName(containerName);
    commandBuilder.setDetach(detach);
    commandBuilder.setVolume(volume);
    commandBuilder.setImage(image);

    return commandBuilder.build();
  }, [root, builder, command, detach, volume, image, containerName]);

  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 p-2 gap-2"}>
      <Card className={"dashboard col-span-1"}>
        <CardHeader>
          <CardTitle>Command Configurations</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2">
          <div className={"grid gap-5"}>
            <FormInput id={"builder"} type={"text"} label={"Builder"} value={builder} onChange={event => setBuilder(event.target.value)} required={true} />
            <FormInput id={"command"} type={"text"} label={"Command"} value={command} onChange={event => setCommand(event.target.value)} required={true} />
            <FormInput id={"volume"} type={"text"} label={"Volume"} value={volume} onChange={event => setVolume(event.target.value)} />
            <FormInput id={"container-name"} type={"text"} label={"Container Name"} value={containerName} onChange={event => setContainerName(event.target.value)} />
            <FormInput id={"image"} type={"text"} label={"Image"} value={image} onChange={event => setImage(event.target.value)} required={true} />
          </div>

          <div className={"flex flex-col gap-2"}>
            <FormCheckbox id={"root"} label={"Root"} checked={root} onCheckedChange={checked => setRoot(checked)} />
            <FormCheckbox id={"detach"} label={"Detach"} checked={detach} onCheckedChange={checked => setDetach(checked)} />
          </div>
        </CardContent>
      </Card>

      <Card className={"col-span-1"}>
        <CardHeader>
          <CardTitle>Resulting Command</CardTitle>
        </CardHeader>

        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-[#2d2d2d] px-4 py-2 text-white rounded">
            <span className={"font-mono"}>{dockerCommand}</span>
          </AspectRatio>
        </CardContent>

        <CardFooter>
          <Button type={"button"} onClick={() => navigator.clipboard.writeText(dockerCommand)}>Copy Command</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Application;