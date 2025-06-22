package com.example.factory;
public class WordFactory extends DocumentFactory {
    public IDocument createDocument() {
        return new WordDocument();
    }
}
