import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { appConfig } from './app.config';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule(appConfig).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have useLanguage method', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(typeof app.useLanguage).toBe('function');
  });

  it('should have title "sp-redesign"', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app['title']()).toBe('sp-redesign');
  });
});
