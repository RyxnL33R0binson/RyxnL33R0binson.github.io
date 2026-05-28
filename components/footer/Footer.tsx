import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { MapPinAreaIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Container from "../global/Container";

export default function Footer() {
  return (
    <section className="border-4 px-8 py-3 h-auto">
      <div className="relative flex items-center justify-center px-4">
        <Container>
          <div className="grid grid-cols-2 grid-rows-4 gap-4 text-lg text-gray-400">
            <div className="col-start-1 row-start-1 max-auto w-full ">
              <p className="text-left">Reach out to me!</p>
            </div>
            <div className="col-start-1 row-start-2 max-auto w-full ">
              <p className="text-left">
                Discuss a project or just want to say hi? My Inbox is open for
                all.
              </p>
            </div>
            <div className="col-start-1 row-start-3 max-auto w-full ">
              Remote
            </div>
            <div className="col-start-1 row-start-4 max-auto w-full flex flex-row items-center gap-4">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="rgb(91, 0, 247)"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="rgb(0, 59, 200)"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="text-foreground"
              />
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="text-foreground"
              />
            </div>
            <div className="row-span-4 col-start-2 row-start-1 max-auto w-full flex items-center justify-end">
              <Image
                src="/me.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
