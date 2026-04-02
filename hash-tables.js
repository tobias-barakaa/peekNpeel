function hashStringtoInt(s, tableSize) {
    let hash = 17;
     for(let i = 0; i < s.lenth; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
     }

    return hash;
}

class HashTable {
    table = new Array(100)
    numItems = 0;
    // loadFactor = this.numItems / this.table.length;




    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if(item) {
                item.forEach(() => {
                    const idx = hashStringtoInt(key, newTable.length)
                   
                    if(newTable[idx]) {
                        newTable[idx].push([key,value])
                
                     } else {
                     newTable[idx] = [key,value]
                     } 
                    newTable[idx] = value;
                })
            }
        })
        this.table = newTable;
    }
    
    
    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        if(loadFactor > .8) {
            // resize
            this.resize();
        }
     const idx = hashStringtoInt(key, this.table.length)
     if(this.table[idx]) {
        this.table[idx].push([key,value])

     } else {
     this.table[idx] = [key,value]

     }
    }
    getItem = (key) => {
        const idx = hashStringtoInt(key, this.table.length)
        if(this.table[ids]) {
            return null;
        }
        return this.table[idx].find(x => x[0] === key)[1];
    }
};

const myTable = new HashTable()
myTable.setItem('firstName', 'tobby')
myTable.getItem('firstname')
console.log(myTable)