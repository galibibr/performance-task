import {useEffect, useMemo, useRef} from "react";
const IconTemperature = require('./assets/icon_temperature.svg') as string
const IconTemperature2 = require('./assets/icon_temperature_2.svg') as string
const IconSun = require('./assets/icon_sun.svg') as string
const IconSun2 = require('./assets/icon_sun_2.svg') as string
const IconScheduled = require('./assets/icon_scheduled.svg') as string

type Props = {
    icon: string,
    iconLabel: string,
    title: string,
    subtitle?: string
    slim?: boolean
    onSize?: (size: {width: number, height: number}) => void
}

export function Event(props: Props) {
    const ref = useRef<HTMLLIElement | null>(null);

    const { onSize } = props;

    useEffect(() => {
        const width = ref.current?.offsetWidth??0;
        const height = ref.current?.offsetHeight??0;
        if (onSize) {
            onSize({ width, height });
        }
    });

    const icon = useMemo(() => {
        switch(props.icon){
            case 'temp':return IconTemperature;
            case 'temp2':return IconTemperature2;
            case 'light':return IconSun;
            case 'light2':return IconSun2;
            case 'schedule':return IconScheduled;
        }
        return ''
    }, [])

    return <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
        <button className="event__button">
            <img className={`event__icon event__icon_${props.icon}`} alt={props.iconLabel} src={icon} loading="lazy"/>
            <h4 className="event__title">{props.title}</h4>
            {props.subtitle &&
                <span className="event__subtitle">{props.subtitle}</span>
            }
        </button>
    </li>;
}
