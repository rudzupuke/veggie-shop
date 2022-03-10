import React from 'react';

interface Props {
    text: string;
    type: string;
    url: string;
}

export default function Button({ text, type, url }: Props) {
    return (
        <a className={`btn btn-${type}`} href={url}>
            {text}
        </a>
    );
}
