import { TestBed } from '@angular/core/testing';

import { ListRecipeService } from './list-recipe.service';

describe('ListRecipeService', () => {
  let service: ListRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
