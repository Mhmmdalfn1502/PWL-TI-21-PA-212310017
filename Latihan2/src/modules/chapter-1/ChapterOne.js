import React, { Component } from "react";
import MessegersUI from "./widgets/Messagers/MeseggersUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div className="px-5">
        <div className="text-center">
          <h1>Chapter One: The Beginning</h1>
          <MessegersUI />
        </div>
      </div>
    );
  }
}
