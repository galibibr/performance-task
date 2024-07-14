import { memo, useEffect, useRef, useState } from "react";
import DevicesTitle from "./DevicesTitle";
import DevicesList from "./DevicesList";
const Devices= memo(() => {
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState('');
  const onSelectInput = event => {
    setActiveTab(event.target.value);
  };
  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
    }
  }, [activeTab, initedRef, setActiveTab]);
  return (
    <section className="section main__devices">
      <DevicesTitle onSelectInput={onSelectInput} activeTab={activeTab} setActiveTab={setActiveTab} />
      <DevicesList activeTab={activeTab} />
    </section>
  );
});
export default Devices;