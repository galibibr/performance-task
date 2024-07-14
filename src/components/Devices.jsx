import { useEffect, useRef, useState } from "react";
import { TABS, TABS_KEYS } from "../consts";
import Event from "./Event";

export default function Devices({ activeTab }) {
    const ref = useRef({});
    const wrapperRef = useRef(null);
    const [hasRightScroll, setHasRightScroll] = useState(false);
  
    useEffect(() => {
      if (ref.current) {
        const newHasRightScroll = ref.current[activeTab].scrollWidth > ref.current[activeTab].offsetWidth;
        setHasRightScroll(newHasRightScroll);
      }
    }, [activeTab]);
  
    const onArrowCLick = () => {
      const scroller = wrapperRef.current.querySelector(
        '.section__panel:not(.section__panel_hidden)'
      );
      if (scroller) {
        scroller.scrollTo({
          left: scroller.scrollLeft + 400,
          behavior: 'smooth',
        });
      }
    };
    return (
      <div className="section__panel-wrapper" ref={wrapperRef}>
        {TABS_KEYS.map((key) => {
          if (key === activeTab) {
            return (
              <div
                ref={(el) => (ref.current[key] = el)}
                key={key}
                role="tabpanel"
                className={
                  'section__panel' +
                  (key === activeTab ? '' : ' section__panel_hidden')
                }
                aria-hidden={key === activeTab ? 'false' : 'true'}
                id={`panel_${key}`}
                aria-labelledby={`tab_${key}`}
              >
                <ul className="section__panel-list">
                  {TABS[key].items.map((item, index) => (
                    <Event 
                        key={index} 
                        {...item} 
                    />
                  ))}
                </ul>
              </div>
            )
          } else return null}
        )}
        {hasRightScroll && (
          <div className="section__arrow" onClick={onArrowCLick}></div>
        )}
      </div>
    );
  }