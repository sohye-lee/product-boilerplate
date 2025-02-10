import { useState } from "react";
import { Label } from "./ui/label";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
 } from "./ui/select";

interface Option {
    value: string;
    label: string;
}



export default function SelectBox({ label, description, options, placeholder, required }: { label: string, description?: string, placeholder?: string,options: Option[], name: string, required?: boolean }) {
    const [open, setOpen] = useState(false);
    const onClick = () => {
        setOpen(true);
    }
    return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-xl font-medium" onClick={() => setOpen(true)}>{label}{required && <sup className="text-red-500">*</sup>}</Label>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
          <Select open={open} onOpenChange={setOpen} required={required}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
              <SelectContent>
                  {/* <SelectItem value="none" disabled>Select an option</SelectItem> */}
                {options && options.map((option, index) => <SelectItem key={index} value={option.value}>{option.label}</SelectItem>)}
            </SelectContent>
          </Select>
    </div>
  );
}