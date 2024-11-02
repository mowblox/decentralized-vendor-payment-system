import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react"; // Custom import if using a larger icon

function UserInformation() {
  return (
    <Select>
      <SelectTrigger className="w-[120px] border-none shadow-none font-pop font-bold">
        <SelectValue placeholder="John Doe" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Settings</SelectItem>
        <SelectItem value="dark">Info</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default UserInformation;
