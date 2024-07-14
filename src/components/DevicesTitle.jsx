import { TABS, TABS_KEYS } from "../constants.js";

export default function DevicesTitle({ onSelectInput, activeTab, setActiveTab }) {
  return (
    <div className="section__title">
      <h2 className="section__title-header">
        Избранные устройства
      </h2>
      <select className="section__select" defaultValue="all" onInput={onSelectInput}>
        {TABS_KEYS.map(key =>
          <option key={key} value={key}>
            {TABS[key].title}
          </option>
        )}
      </select>
      <ul role="tablist" className="section__tabs">
        {TABS_KEYS.map(key =>
          <li
            key={key}
            role="tab"
            aria-selected={key === activeTab ? 'true' : 'false'}
            tabIndex={key === activeTab ? 0 : undefined}
            className={'section__tab' + (key === activeTab ? ' section__tab_active' : '')}
            id={`tab_${key}`}
            aria-controls={`panel_${key}`}
            onClick={() => setActiveTab(key)}
          >
            {TABS[key].title}
          </li>
        )}
      </ul>
    </div>
  );
}
