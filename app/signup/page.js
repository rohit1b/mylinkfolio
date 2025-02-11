"use client";
import React, { useState } from "react";
import Link from "next/link";
import Form from "./../../components/Form";
import { Heading, Box, Group, Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

import Education from "./../../components/Education";
import Projects from "./../../components/Projects";
import Certificates from "./../../components/Certificates";
import Experience from "./../../components/Experience";
import Skills from "./../../components/Skills";

import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/ui/steps";

const page = () => {
  const [submit_btn, setSubmit_btn] = useState(false);
  return (
    <div className="min-h-dvh flex flex-col lg:items-center justify-center lg:p-8">
      <StepsRoot defaultStep={0} count={6} className="w-full lg:w-[60%]">
        <StepsList className = "hidden lg:flex flex-row">
          <StepsItem index={0} title="Personal info" />
          <StepsItem index={1} title="Education" />
          <StepsItem index={2} title="Skills" />
          <StepsItem index={3} title="Projects" />
          <StepsItem index={4} title="Experience" />
          <StepsItem index={5} title="Certificates" />
        </StepsList>

        <StepsContent index={0}>
          <Form submit_btn={false} />
        </StepsContent>
        <StepsContent index={1}>
          <Education submit_btn={false} />
        </StepsContent>
        <StepsContent index={2}>
          <Projects submit_btn={false} />
        </StepsContent>
        <StepsContent index={3}>
          <Skills submit_btn={false} />
        </StepsContent>
        <StepsContent index={4}>
          <Experience submit_btn={false} />
        </StepsContent>
        <StepsContent index={5}>
          <Certificates submit_btn={true} />
        </StepsContent>
        <StepsCompletedContent>
          <section className="min-h-dvh flex flex-col items-center">
            <Stack className = "w-full p-16 bg-[#0f0f0f] mt-4 lg:mt-16">
              <Heading>🎉</Heading>
              <Heading>All steps are complete!</Heading>
              <Link href="/resume">
                <Button variant="solid">Go to Your Resume</Button>
              </Link>
            </Stack>
          </section>
        </StepsCompletedContent>

        <Group grow className="pt-0 p-4">
          <StepsPrevTrigger asChild>
            <Button variant="outline" size="sm">
              Prev
            </Button>
          </StepsPrevTrigger>
          <StepsNextTrigger asChild>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </StepsNextTrigger>
        </Group>
      </StepsRoot>
    </div>
  );
};

export default page;
