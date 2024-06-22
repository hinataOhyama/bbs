import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";

const BBSCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisi ac lacinia tincidunt, mauris nunc tincidunt nunc, vitae tincidunt
        nunc nisl et nunc. Nulla facilisi. Sed euismod, nisi ac lacinia
        tincidunt, mauris nunc tincidunt nunc, vitae tincidunt nunc nisl et
        nunc. Nulla facilisi.
      </CardContent>
      <CardFooter className="flex justify-between text-blue-500">
        Read More
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
