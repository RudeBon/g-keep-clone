import { useEffect, useState } from 'react';
import { Button, Modal, Layout, Divider } from 'antd';
import 'antd/dist/antd.css';
import NotesList from './NotesList';
import AddNoteComp from './AddNoteComp';
import firebase from 'firebase';

export default function Authorized() {
    return (
        <>
            <AddNoteComp />
            <Divider />
            <NotesList />
        </>
    )
}