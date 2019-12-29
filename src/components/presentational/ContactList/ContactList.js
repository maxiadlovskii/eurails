import React from 'react'
import {Empty} from "../Empty/Empty";

export const ContactList = ({ list }) => list && list.length ? <></> : <Empty/>