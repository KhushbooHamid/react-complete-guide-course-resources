import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabButtons from "./TabButtons";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Example() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
  
      setSelectedTopic(selectedButton);
    //   console.log(tabContent);
  }
    return(
        <Section title = "Examples" id="examples">
            <Tabs
            
            buttons={
            <>
            <TabButtons isSelected={selectedTopic==='components'} onClick={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic==='props'} onClick={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic==='state'} onClick={() => handleSelect('state')}>State</TabButtons>
          </>}>
          {/* {tabContent} */}
          </Tabs>
          <h2>Examples</h2>
          <menu>
            </menu>
          {!selectedTopic ? <p>Choose a topic to learn</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>}
          
          
        </Section>
    )
}