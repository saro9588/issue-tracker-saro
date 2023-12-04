import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Pencil1Icon } from "@radix-ui/react-icons";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil1Icon />
      <Link href={`/issues/${issueId}/edit`}> Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
