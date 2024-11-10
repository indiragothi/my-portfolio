import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, languages } from "../../content_option";
import { motion, AnimatePresence } from "framer-motion";


export const Portfolio = () => {

  const [selected, setSelected] = useState("all");

  useEffect(() => {

  }, [selected])

  const handleClick = (arg) => {
    setSelected(arg);
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="8">
            {
              languages.map((ele) => {
                return <button key={ele} onClick={() => handleClick(ele)} className={`po_btn ${selected === ele ? "po_btn_selected" : ""}`}>{ele}</button>
              })
            }
          </Col>
        </Row>
        <div
          layout
          className="mb-5 po_items_ho">
          {dataportfolio.filter((ele) => ele.tags.includes(selected)).map((data, i) => {
            return (
              <div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: .8 }}
                key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p  >{data.desctiption}</p>
                  <a target="_blank" rel="noopener noreferrer" href={data.link}>
                    view project
                  </a>
                </div>
              </div>
            )
          })
          }
        </div>
      </Container>
    </HelmetProvider >
  );
};
