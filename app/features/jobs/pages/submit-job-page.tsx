import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-job-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Job | wemake" },
    { name: "description", content: "Submit a job posting" },
  ];
};

export default function SubmitJobPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit a Job"
        subtitle="Share job opportunities with the community"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Job Title"
            description="The title of the job position"
            id="title"
            name="title"
            type="text"
            required
            placeholder="e.g. Senior Full Stack Developer"
          />
          <InputPair
            label="Company Name"
            description="The name of the company"
            id="company"
            name="company"
            required
            type="text"
            placeholder="Company name"
          />
          <InputPair
            label="Company Website"
            description="The URL of the company website"
            id="companyUrl"
            name="companyUrl"
            required
            type="url"
            placeholder="https://example.com"
          />
          <InputPair
            label="Company HQ Location"
            description="The headquarters location of the company"
            id="companyHq"
            name="companyHq"
            required
            type="text"
            placeholder="e.g. San Francisco, CA"
          />
          <InputPair
            textArea
            label="Job Description"
            description="A detailed description of the job position"
            id="description"
            name="description"
            required
            type="text"
            placeholder="Describe the job position, requirements, and responsibilities"
          />
          <InputPair
            label="Salary Range"
            description="The salary range for this position"
            id="salary"
            name="salary"
            required
            type="text"
            placeholder="e.g. $120k - $150k"
          />
          <SelectPair
            label="Job Type"
            description="The type of employment"
            name="type"
            required
            placeholder="Select job type"
            options={[
              { label: "Full-time", value: "full-time" },
              { label: "Part-time", value: "part-time" },
              { label: "Contract", value: "contract" },
              { label: "Internship", value: "internship" },
            ]}
          />
          <SelectPair
            label="Position Location"
            description="Where the position is located"
            name="positionLocation"
            required
            placeholder="Select location type"
            options={[
              { label: "Remote", value: "remote" },
              { label: "On-site", value: "on-site" },
              { label: "Hybrid", value: "hybrid" },
            ]}
          />
          <InputPair
            label="Application URL"
            description="The URL where candidates can apply"
            id="applicationUrl"
            name="applicationUrl"
            required
            type="url"
            placeholder="https://example.com/apply"
          />
          <Button type="submit" className="w-full" size="lg">
            Submit Job
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {logo ? (
              <img src={logo} className="object-cover w-full h-full" />
            ) : null}
          </div>
          <Label className="flex flex-col gap-1">
            Company Logo
            <small className="text-muted-foreground">
              This is the logo of the company.
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="logo"
          />
          <div className="flex flex-col text-xs">
            <span className="text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className="text-muted-foreground">
              Allowed formats: PNG, JPEG
            </span>
            <span className="text-muted-foreground">Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}

