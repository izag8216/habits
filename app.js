// Local Storage Key
const HABITS_STORAGE_KEY = 'habits';

// Initial Dummy Data
const initialHabits = [
    {
        id: 1,
        name: 'Morning Meditation',
        goal: '15 mins',
        color: '#ff5252',
        streak: 5,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 2,
        name: 'Jogging',
        goal: '30 mins',
        color: '#2196f3',
        streak: 3,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 3,
        name: 'Reading',
        goal: '2 chapters',
        color: '#9c27b0',
        streak: 7,
        lastChecked: new Date().toISOString(),
        progress: 0,
        created: new Date().toISOString()
    },
    {
        id: 4,
        name: 'Water Intake',
        goal: '2 liters',
        color: '#00bcd4',
        streak: 10,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 5,
        name: 'Language Learning',
        goal: '1 lesson',
        color: '#4caf50',
        streak: 15,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 6,
        name: 'Stretching',
        goal: '10 mins',
        color: '#ff9800',
        streak: 4,
        lastChecked: new Date().toISOString(),
        progress: 0,
        created: new Date().toISOString()
    },
    {
        id: 7,
        name: 'Journaling',
        goal: '1 page',
        color: '#795548',
        streak: 20,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 8,
        name: 'Music Practice',
        goal: '20 mins',
        color: '#607d8b',
        streak: 2,
        lastChecked: new Date().toISOString(),
        progress: 0,
        created: new Date().toISOString()
    },
    {
        id: 9,
        name: 'Room Tidying',
        goal: '5 mins',
        color: '#ff4081',
        streak: 6,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    },
    {
        id: 10,
        name: 'Coding Practice',
        goal: '1 problem',
        color: '#673AB7',
        streak: 12,
        lastChecked: new Date().toISOString(),
        progress: 1,
        created: new Date().toISOString()
    }
];

// DOM Elements
const addHabitBtn = document.getElementById('addHabitBtn');
const modal = document.getElementById('addHabitModal');
const habitForm = document.getElementById('habitForm');
const cancelBtn = document.getElementById('cancelBtn');
const habitsGrid = document.querySelector('.habits-grid');

// App State
let habits = JSON.parse(localStorage.getItem(HABITS_STORAGE_KEY) || JSON.stringify(initialHabits));

// Event Handlers
const HabitManager = {
    updateProgress(habitId) {
        const habit = habits.find(h => h.id === habitId);
        if (!habit) return;

        const today = new Date().toDateString();
        const lastChecked = habit.lastChecked ? new Date(habit.lastChecked).toDateString() : null;

        if (lastChecked !== today) {
            habit.progress = (habit.progress + 1) % 2; // Toggle between 0 and 1
            habit.lastChecked = new Date().toISOString();

            // Update streak
            if (habit.progress === 1) {
                if (lastChecked === new Date(Date.now() - 86400000).toDateString()) {
                    habit.streak++;
                } else {
                    habit.streak = 1;
                }
            } else {
                habit.streak = 0;
            }

            this.saveHabits();
            this.renderHabits();
        }
    },

    deleteHabit(habitId) {
        habits = habits.filter(h => h.id !== habitId);
        this.saveHabits();
        this.renderHabits();
    },

    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('habitName').value;
        const goal = document.getElementById('habitGoal').value;
        const color = document.getElementById('habitColor').value;

        const newHabit = {
            id: Date.now(),
            name,
            goal,
            color,
            streak: 0,
            lastChecked: null,
            progress: 0,
            created: new Date().toISOString()
        };

        habits.push(newHabit);
        this.saveHabits();
        this.renderHabits();

        // Reset form and close modal
        habitForm.reset();
        modal.classList.remove('active');
    },

    renderHabits() {
        habitsGrid.innerHTML = '';
        habits.forEach(habit => {
            const card = document.createElement('div');
            card.className = 'habit-card';
            card.innerHTML = `
                <div class="habit-header">
                    <h3 class="habit-title">${habit.name}</h3>
                    <button class="btn-secondary delete-habit">Delete</button>
                </div>
                <div class="habit-goal">${habit.goal}</div>
                <div class="habit-streak">
                    <span class="streak-icon">🔥</span>
                    <span>${habit.streak} day${habit.streak !== 1 ? 's' : ''} streak</span>
                </div>
                <div class="habit-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" 
                             style="width: ${habit.progress * 100}%; 
                                    background-color: ${habit.color}">
                        </div>
                    </div>
                </div>
                <button class="btn-primary progress-btn" style="margin-top: 1rem; width: 100%">
                    ${habit.progress === 1 ? 'Completed' : 'Mark Complete'}
                </button>
            `;

            // Add event listeners
            card.querySelector('.delete-habit').addEventListener('click', 
                () => this.deleteHabit(habit.id));
            card.querySelector('.progress-btn').addEventListener('click', 
                () => this.updateProgress(habit.id));

            habitsGrid.appendChild(card);
        });
    },

    saveHabits() {
        localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    }
};

// Event Listeners Setup
addHabitBtn.addEventListener('click', () => modal.classList.add('active'));
cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
habitForm.addEventListener('submit', (e) => HabitManager.handleSubmit(e));

// Initial render
HabitManager.renderHabits();
