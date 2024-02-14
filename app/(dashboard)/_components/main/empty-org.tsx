import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/logo.svg" alt="Empty" height={100} width={100} />
      <h2 className="text-2xl font-semibold">Welcome to CoVibe</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create organizations to get started
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg" className="mt-2">
            Create Organizations
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 transparent border-none">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};
