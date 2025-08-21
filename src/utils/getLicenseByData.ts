import { Licenses } from "@/types/employees";
interface Props {
  licenseFrom: string;
  licenseType: string;
  licenseTo: string;
}
const getLicenseByData = ({
  licenseFrom,
  licenseType,
  licenseTo,
}: Props): Licenses[] | null => {
  if (!licenseFrom && !licenseType && !licenseTo) return null;
  return [{ to: licenseTo, from: licenseFrom, type: licenseType }];
};

export default getLicenseByData;
