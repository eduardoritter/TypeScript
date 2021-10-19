interface SortStrategy {
    sort(dataset: number[]): number[]
}

class BubbleSortStrategy implements SortStrategy {
    public sort(dataset: number[]): number[] {

        console.log('Sorting using bubble sort')

        // Do sorting
        return dataset;
    }
}

class QuickSortStrategy implements SortStrategy {
    public sort(dataset: number[]): number[] {

        console.log('Sorting using quick sort')

        // Do sorting
        return dataset;
    }
}

class Sorter {

    constructor(protected sorter:SortStrategy){}

    public sort(dataset: number[]): number[] {
        return this.sorter.sort(dataset)
    }
}

const dataset = [1, 5, 4, 3, 2, 8];

const sorterOne = new Sorter(new BubbleSortStrategy());
sorterOne.sort(dataset); // Output : Sorting using bubble sort

const sorterTwo = new Sorter(new QuickSortStrategy());
sorterTwo.sort(dataset); 
