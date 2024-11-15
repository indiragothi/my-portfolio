import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaWhatsapp,
  FaMedium,
  FaGlobe
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.whatsapp && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.portfolio && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.portfolio}>
              <FaGlobe />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.medium && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialprofils.medium}>
              <FaMedium />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
