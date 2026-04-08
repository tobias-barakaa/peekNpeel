function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueu = function(element) {
        collection.push(element);
    };
    this.deque = function(element) {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };

    this.isEmpty = function() {
        return (collection.length === 0)
    }
};

var q = new Queue();
q.enqueu('a');
q.enqueu('b');
q.enqueu('c');
q.print();
q.deque();
q.print();
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());



function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
        (console.log(collection));
    };

    this.encqueu = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for(var i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]) {
                    collectioin.splice(i,0,element);
                    added = true;
                    break
                }
            };
            if(!added) {
                collection.push(element);
            }
        }
    };
    this.deque = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.encqueu(['Beau Carnes', 2])


class MinHeapPriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    // Helper methods for heap operations
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }
    
    getRightChildIndex(index) {
        return 2 * index + 2;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // Add element with priority (lower number = higher priority)
    enqueue(element, priority) {
        const item = { element, priority };
        this.heap.push(item);
        this.heapifyUp();
    }
    
    // Move element up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            
            if (this.heap[parentIndex].priority <= this.heap[index].priority) {
                break;
            }
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    // Remove and return highest priority element (min priority)
    dequeue() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        
        const min = this.heap[0];
        const last = this.heap.pop();
        
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        
        return min.element;
    }
    
    // Move element down to maintain heap property
    heapifyDown() {
        let index = 0;
        
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            
            if (rightChildIndex < this.heap.length && 
                this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = rightChildIndex;
            }
            
            if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) {
                break;
            }
            
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
    
    // View highest priority element
    front() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        return this.heap[0].element;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    size() {
        return this.heap.length;
    }
    
    print() {
        console.log("Heap Priority Queue:");
        console.log(JSON.stringify(this.heap, null, 2));
    }
}

// Example with heap-based priority queue
const heapPQ = new MinHeapPriorityQueue();
heapPQ.enqueue("Low priority task", 5);
heapPQ.enqueue("Urgent task", 1);
heapPQ.enqueue("Medium task", 3);
heapPQ.enqueue("Critical task", 0);  // Highest priority

console.log("Dequeue order:");
while (!heapPQ.isEmpty()) {
    console.log(`  → ${heapPQ.dequeue()}`);
}
// Output:
// Dequeue order:
//   → Critical task
//   → Urgent task
//   → Medium task
//   → Low priority task


class PrinterQueue {
    constructor() {
        this.queue = new Queue();
        this.printing = false;
    }
    
    addDocument(document, pages) {
        this.queue.enqueue({ document, pages, timestamp: new Date() });
        console.log(`📄 Added: "${document}" (${pages} pages)`);
        this.processQueue();
    }
    
    async processQueue() {
        if (this.printing) return;
        
        if (this.queue.isEmpty()) {
            console.log("📭 Queue is empty");
            return;
        }
        
        this.printing = true;
        const job = this.queue.dequeue();
        
        console.log(`🖨️ Printing: "${job.document}" (${job.pages} pages)...`);
        
        // Simulate printing time
        await new Promise(resolve => setTimeout(resolve, job.pages * 1000));
        
        console.log(`✅ Completed: "${job.document}"`);
        this.printing = false;
        
        this.processQueue(); // Process next document
    }
    
    viewQueue() {
        const jobs = this.queue.toArray();
        console.log("\n📋 Print Queue:");
        jobs.forEach((job, index) => {
            console.log(`  ${index + 1}. "${job.document}" (${job.pages} pages)`);
        });
        console.log(`Total: ${jobs.length} job(s)\n`);
    }
}

const printer = new PrinterQueue();
printer.addDocument("Report.pdf", 5);
printer.addDocument("Invoice.docx", 2);
printer.addDocument("Photo.jpg", 1);
setTimeout(() => printer.viewQueue(), 500);



class EmergencyRoom {
    constructor() {
        this.triage = new PriorityQueue();
        this.priorities = {
            "Critical": 1,      // Heart attack, severe trauma
            "Emergency": 2,     // Chest pain, major fractures
            "Urgent": 3,        // Severe fever, minor fractures
            "Semi-urgent": 4,   // Moderate symptoms
            "Non-urgent": 5     // Minor complaints
        };
    }
    
    addPatient(name, condition, priorityLevel) {
        const priority = this.priorities[priorityLevel];
        this.triage.enqueue({ name, condition, priorityLevel }, priority);
        console.log(`🏥 Added: ${name} - ${condition} (${priorityLevel})`);
        this.displayQueue();
    }
    
    treatNext() {
        if (this.triage.isEmpty()) {
            console.log("No patients waiting");
            return;
        }
        
        const patient = this.triage.dequeue();
        console.log(`\n👨‍⚕️ TREATING: ${patient.name} - ${patient.condition} (${patient.priorityLevel})`);
        console.log(`Remaining patients: ${this.triage.size()}\n`);
        this.displayQueue();
        return patient;
    }
    
    displayQueue() {
        console.log("\n📋 Waiting List (by priority):");
        this.triage.items.forEach((item, index) => {
            console.log(`  ${index + 1}. ${item.element.name} - ${item.element.condition} (Priority: ${item.element.priorityLevel})`);
        });
        console.log();
    }
}

const er = new EmergencyRoom();
er.addPatient("John Doe", "Minor cut", "Non-urgent");
er.addPatient("Jane Smith", "Chest pain", "Emergency");
er.addPatient("Bob Wilson", "Broken arm", "Urgent");
er.addPatient("Alice Brown", "Heart attack", "Critical");

er.treatNext();  // Heart attack patient first
er.treatNext();  // Chest pain next
er.treatNext();  // Broken arm
er.treatNext();  // Minor cut last







class TaskScheduler {
    constructor() {
        this.tasks = new MinHeapPriorityQueue();
        this.running = false;
    }
    
    scheduleTask(name, priority, duration) {
        this.tasks.enqueue({ name, duration, scheduledAt: new Date() }, priority);
        console.log(`⏰ Scheduled: ${name} (Priority: ${priority}, Duration: ${duration}s)`);
        this.runTasks();
    }
    
    async runTasks() {
        if (this.running) return;
        
        this.running = true;
        
        while (!this.tasks.isEmpty()) {
            const task = this.tasks.dequeue();
            console.log(`\n🚀 Running: ${task.name} (Priority: ${task.priority})`);
            console.log(`⏳ Estimated time: ${task.duration} seconds`);
            
            await new Promise(resolve => setTimeout(resolve, task.duration * 1000));
            console.log(`✅ Completed: ${task.name} at ${new Date().toLocaleTimeString()}`);
        }
        
        console.log("\n✨ All tasks completed!");
        this.running = false;
    }
    
    viewPending() {
        console.log("\n📊 Pending Tasks:");
        this.tasks.heap.forEach((task, index) => {
            console.log(`  ${index + 1}. ${task.element.name} (Priority: ${task.priority})`);
        });
    }
}

const scheduler = new TaskScheduler();
scheduler.scheduleTask("Backup database", 2, 3);
scheduler.scheduleTask("Send emails", 3, 2);
scheduler.scheduleTask("Critical update", 1, 5);
scheduler.scheduleTask("Generate report", 4, 1);



class CallCenter {
    constructor() {
        this.regularQueue = new Queue();
        this.premiumQueue = new Queue();
        this.agents = [];
        this.callStats = {
            answered: 0,
            abandoned: 0,
            totalWaitTime: 0
        };
    }
    
    addAgent(name) {
        this.agents.push({ name, busy: false });
        console.log(`📞 Agent ${name} added`);
    }
    
    incomingCall(callerType, callerId, issue) {
        const call = {
            id: Date.now(),
            callerId,
            issue,
            startTime: Date.now(),
            type: callerType
        };
        
        if (callerType === "Premium") {
            this.premiumQueue.enqueue(call);
            console.log(`⭐ Premium call from ${callerId} - ${issue}`);
        } else {
            this.regularQueue.enqueue(call);
            console.log(`📞 Regular call from ${callerId} - ${issue}`);
        }
        
        this.routeCalls();
    }
    
    routeCalls() {
        // Find available agent
        const availableAgent = this.agents.find(agent => !agent.busy);
        
        if (!availableAgent) return;
        
        // Check premium queue first, then regular
        let nextCall = null;
        let queueType = "";
        
        if (!this.premiumQueue.isEmpty()) {
            nextCall = this.premiumQueue.dequeue();
            queueType = "Premium";
        } else if (!this.regularQueue.isEmpty()) {
            nextCall = this.regularQueue.dequeue();
            queueType = "Regular";
        } else {
            return;
        }
        
        // Assign call to agent
        availableAgent.busy = true;
        const waitTime = (Date.now() - nextCall.startTime) / 1000;
        
        console.log(`\n🎧 Agent ${availableAgent.name} taking ${queueType} call:`);
        console.log(`   From: ${nextCall.callerId}`);
        console.log(`   Issue: ${nextCall.issue}`);
        console.log(`   Wait time: ${waitTime.toFixed(1)} seconds\n`);
        
        this.callStats.totalWaitTime += waitTime;
        
        // Simulate call duration
        setTimeout(() => {
            this.callStats.answered++;
            console.log(`✅ Call completed: ${nextCall.callerId} (${nextCall.issue})`);
            availableAgent.busy = false;
            this.routeCalls(); // Route next call
        }, 3000);
    }
    
    getStats() {
        console.log("\n📊 Call Center Statistics:");
        console.log(`  Answered: ${this.callStats.answered}`);
        console.log(`  Premium queue: ${this.premiumQueue.size()}`);
        console.log(`  Regular queue: ${this.regularQueue.size()}`);
        console.log(`  Active agents: ${this.agents.filter(a => a.busy).length}/${this.agents.length}`);
        console.log(`  Avg wait time: ${(this.callStats.totalWaitTime / (this.callStats.answered || 1)).toFixed(1)}s\n`);
    }
}

const callCenter = new CallCenter();
callCenter.addAgent("Sarah");
callCenter.addAgent("Mike");

callCenter.incomingCall("Premium", "Alice", "Account issue");
callCenter.incomingCall("Regular", "Bob", "Billing question");
callCenter.incomingCall("Premium", "Charlie", "Technical support");
callCenter.incomingCall("Regular", "Diana", "General inquiry");

setTimeout(() => callCenter.getStats(), 4000);


class VisualQueue {
    constructor() {
        this.items = [];
    }
    
    enqueue(value) {
        this.items.push(value);
        this.visualize("ENQUEUE", value);
        return this;
    }
    
    dequeue() {
        const value = this.items.shift();
        this.visualize("DEQUEUE", value);
        return value;
    }
    
    visualize(action, value) {
        console.log(`\n${action}: ${value || ''}`);
        
        if (this.items.length === 0) {
            console.log("Queue: [Empty]");
        } else {
            const maxWidth = 5;
            console.log("┌" + "─".repeat(this.items.length * (maxWidth + 1) + 1) + "┐");
            
            // Display elements
            let row = "│";
            for (let i = 0; i < this.items.length; i++) {
                row += ` ${String(this.items[i]).padEnd(maxWidth)}│`;
            }
            console.log(row);
            
            // Display arrows
            let arrows = " ";
            for (let i = 0; i < this.items.length; i++) {
                arrows += "↓".padEnd(maxWidth + 1);
            }
            console.log(arrows);
            
            // Display labels
            let labels = " ";
            for (let i = 0; i < this.items.length; i++) {
                const label = i === 0 ? "Front" : (i === this.items.length - 1 ? "Back" : "");
                labels += label.padEnd(maxWidth + 1);
            }
            console.log(labels);
            
            console.log("└" + "─".repeat(this.items.length * (maxWidth + 1) + 1) + "┘");
        }
        console.log(`Size: ${this.items.length}\n`);
    }
}

const vq = new VisualQueue();
vq.enqueue(10).enqueue(20).enqueue(30);
vq.dequeue();
vq.dequeue();