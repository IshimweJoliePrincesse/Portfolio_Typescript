import { author } from "@/lib/content/portfolio";
import { SideBar, SociaLink } from "@/components";

const Email = () => {
  return (
    <SideBar side="right">
      <SociaLink
        href={`mailto:${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-xs"
      >
        {author.email}
      </SociaLink>
    </SideBar>
  );
};

export default Email;
