import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Todo from './src/pages/Todo'

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<Todo />} />
        </Routes>
    )
}