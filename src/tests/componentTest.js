// create tests for : custom navbar, longread card, world card, wold object card
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";
import LongreadCard from "../components/LongreadCard";
import WorldCard from "../components/WorldCard";
import WorldObjectCard from "../components/WorldObjectCard";

test(
  "renders navbar",
  () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const linkElement = screen.getByText(/Darts/i);
    expect(linkElement).toBeInTheDocument();
  },

  test(
    "renders longread card",
    () => {
      render(
        <Router>
          <LongreadCard />
        </Router>
      );
      const linkElement = screen.getByText(/Longread/i);
      expect(linkElement).toBeInTheDocument();
    },

    test(
      "renders world card",
      () => {
        render(
          <Router>
            <WorldCard />
          </Router>
        );
        const linkElement = screen.getByText(/World/i);
        expect(linkElement).toBeInTheDocument();
      },

      test("renders world object card", () => {
        render(
          <Router>
            <WorldObjectCard />
          </Router>
        );
        const linkElement = screen.getByText(/World/i);
        expect(linkElement).toBeInTheDocument();
      })
    )
  )
);
