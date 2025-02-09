import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import type { InputHTMLAttributes } from "react";

export default function InputBox({ label, description,type, ...rest }: { label: string, description?: string, type?: string } & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={rest.name} className="text-xl font-medium">{label}{rest.required && <sup className="text-red-500">*</sup>}</Label>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      {type === "textarea" ? <Textarea id={rest.name} name={rest.name} placeholder={rest.placeholder} rows={5} {...rest} /> : <Input id={rest.name} name={rest.name} placeholder={rest.placeholder} {...rest} />}
    </div>
  );
}