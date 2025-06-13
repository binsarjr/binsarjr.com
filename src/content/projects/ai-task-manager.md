---
layout: project
title: 'AI-Powered Task Management App'
description: 'Intelligent task management application with AI-powered scheduling, priority detection, and productivity insights built with React and FastAPI.'
image: '/project1.jpg'
technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'OpenAI', 'Tailwind CSS']
githubUrl: 'https://github.com/binsarjr/ai-task-manager'
liveUrl: 'https://tasks.binsarjr.com'
category: 'web'
featured: true
completedAt: '2024-10-20'
---

# AI-Powered Task Management Application

This innovative task management application leverages artificial intelligence to help users organize, prioritize, and complete their tasks more efficiently. The system uses machine learning to understand user patterns and provide intelligent suggestions.

## Key Features

### 🤖 AI-Powered Smart Scheduling

The application analyzes your task history, deadlines, and productivity patterns to suggest optimal scheduling:

```python
# AI scheduling algorithm
class SmartScheduler:
    def __init__(self, user_id: str):
        self.user_id = user_id
        self.user_patterns = self.load_user_patterns()

    def suggest_schedule(self, tasks: List[Task]) -> Schedule:
        # Analyze task complexity and user energy patterns
        energy_levels = self.predict_energy_levels()
        task_complexities = self.analyze_task_complexity(tasks)

        schedule = Schedule()
        for task in sorted(tasks, key=lambda t: t.priority):
            optimal_time = self.find_optimal_time_slot(
                task, energy_levels, task_complexities[task.id]
            )
            schedule.add_task(task, optimal_time)

        return schedule
```

### 📊 Productivity Analytics

Comprehensive analytics dashboard showing productivity trends, time allocation, and improvement suggestions:

```typescript
interface ProductivityMetrics {
  completionRate: number;
  averageTaskDuration: number;
  productiveHours: HourRange[];
  weeklyTrends: TrendData[];
  categoryBreakdown: CategoryStats[];
}

const ProductivityDashboard: React.FC = () => {
  const { metrics, loading } = useProductivityMetrics();

  return (
    <div className="dashboard-grid">
      <CompletionRateChart data={metrics.completionRate} />
      <ProductiveHoursHeatmap hours={metrics.productiveHours} />
      <WeeklyTrendsChart trends={metrics.weeklyTrends} />
      <CategoryBreakdown categories={metrics.categoryBreakdown} />
    </div>
  );
};
```

### 🎯 Intelligent Priority Detection

The system automatically analyzes task descriptions to suggest priority levels and categorization:

```python
from transformers import pipeline
import spacy

class TaskAnalyzer:
    def __init__(self):
        self.sentiment_analyzer = pipeline("sentiment-analysis")
        self.nlp = spacy.load("en_core_web_sm")

    def analyze_task(self, description: str) -> TaskAnalysis:
        # Extract key information from task description
        doc = self.nlp(description)

        # Detect urgency keywords
        urgency_keywords = ["urgent", "asap", "deadline", "immediately"]
        urgency_score = sum(1 for token in doc if token.text.lower() in urgency_keywords)

        # Analyze sentiment for stress detection
        sentiment = self.sentiment_analyzer(description)[0]

        # Estimate complexity based on description length and entities
        complexity = self.estimate_complexity(doc)

        return TaskAnalysis(
            priority=self.calculate_priority(urgency_score, sentiment, complexity),
            category=self.suggest_category(doc),
            estimated_duration=self.estimate_duration(complexity),
            tags=self.extract_tags(doc)
        )
```

## Technical Architecture

### Frontend (React + TypeScript)

The frontend is built with React and TypeScript, providing a responsive and intuitive user interface:

```typescript
// Task component with real-time updates
import { useState, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: Date;
  aiSuggestions: AISuggestion[];
}

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { sendMessage } = useWebSocket();

  const updateTaskStatus = async (newStatus: Task['status']) => {
    setIsUpdating(true);
    try {
      await api.updateTask(task.id, { status: newStatus });
      sendMessage({
        type: 'task_updated',
        taskId: task.id,
        status: newStatus
      });
    } catch (error) {
      console.error('Failed to update task:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className={`task-card priority-${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      {task.aiSuggestions.length > 0 && (
        <div className="ai-suggestions">
          <h4>💡 AI Suggestions</h4>
          {task.aiSuggestions.map(suggestion => (
            <div key={suggestion.id} className="suggestion">
              {suggestion.text}
            </div>
          ))}
        </div>
      )}

      <TaskActions
        task={task}
        onStatusChange={updateTaskStatus}
        disabled={isUpdating}
      />
    </div>
  );
};
```

### Backend (FastAPI + Python)

The backend provides a robust API with AI integration:

```python
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import asyncio

app = FastAPI(title="AI Task Manager API")

@app.post("/tasks/", response_model=TaskResponse)
async def create_task(
    task: TaskCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    # Analyze task with AI
    ai_analysis = await task_analyzer.analyze_task(task.description)

    # Create task with AI suggestions
    db_task = Task(
        title=task.title,
        description=task.description,
        user_id=current_user.id,
        priority=ai_analysis.priority,
        category=ai_analysis.category,
        estimated_duration=ai_analysis.estimated_duration
    )

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    # Generate AI suggestions asynchronously
    asyncio.create_task(
        generate_task_suggestions(db_task.id)
    )

    return TaskResponse.from_orm(db_task)

@app.get("/analytics/productivity")
async def get_productivity_analytics(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    analyzer = ProductivityAnalyzer(current_user.id, db)
    return await analyzer.generate_analytics()
```

### Real-time Updates with WebSockets

```python
from fastapi import WebSocket
import json

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast_task_update(self, task_id: str, update_data: dict):
        message = {
            "type": "task_updated",
            "task_id": task_id,
            "data": update_data
        }

        for connection in self.active_connections:
            try:
                await connection.send_text(json.dumps(message))
            except:
                # Remove dead connections
                await self.disconnect(connection)

manager = ConnectionManager()

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Handle incoming messages
            await handle_websocket_message(data, user_id)
    except:
        manager.disconnect(websocket)
```

## AI Integration

### OpenAI GPT Integration

The application uses OpenAI's GPT models for intelligent task analysis and suggestions:

```python
import openai
from typing import List, Dict

class AITaskAssistant:
    def __init__(self, api_key: str):
        openai.api_key = api_key

    async def generate_task_breakdown(self, task_description: str) -> List[str]:
        prompt = f"""
        Break down this task into smaller, actionable subtasks:

        Task: {task_description}

        Please provide 3-5 specific subtasks that would help complete this task.
        Format as a simple list.
        """

        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=300
        )

        content = response.choices[0].message.content
        return [task.strip() for task in content.split('\n') if task.strip()]

    async def suggest_time_blocks(self, tasks: List[Task]) -> Dict[str, str]:
        task_list = '\n'.join([f"- {task.title} (Priority: {task.priority})" for task in tasks])

        prompt = f"""
        Given these tasks, suggest optimal time blocks for completion:

        {task_list}

        Consider:
        - High priority tasks should be scheduled during peak energy hours (9-11 AM, 2-4 PM)
        - Complex tasks need larger time blocks
        - Similar tasks can be batched together

        Provide suggestions in format: "Task Name: Suggested Time"
        """

        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=400
        )

        # Parse response into structured suggestions
        return self.parse_time_suggestions(response.choices[0].message.content)
```

## Database Design

The application uses PostgreSQL with carefully designed schemas for optimal performance:

```sql
-- Tasks table with AI-enhanced fields
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    priority task_priority NOT NULL DEFAULT 'medium',
    status task_status NOT NULL DEFAULT 'pending',
    category VARCHAR(100),
    estimated_duration INTEGER, -- in minutes
    actual_duration INTEGER,
    due_date TIMESTAMP,
    completed_at TIMESTAMP,
    ai_analyzed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- AI suggestions table
CREATE TABLE ai_suggestions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID NOT NULL REFERENCES tasks(id),
    suggestion_type VARCHAR(50) NOT NULL, -- 'breakdown', 'scheduling', 'priority'
    content JSONB NOT NULL,
    confidence_score DECIMAL(3,2),
    applied BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- User productivity patterns
CREATE TABLE productivity_patterns (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    hour_of_day INTEGER NOT NULL CHECK (hour_of_day >= 0 AND hour_of_day <= 23),
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 1 AND day_of_week <= 7),
    productivity_score DECIMAL(3,2) NOT NULL,
    task_count INTEGER DEFAULT 0,
    completion_rate DECIMAL(3,2) DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);
```

## Performance Optimizations

### Caching Strategy

```python
from redis import Redis
import json
from functools import wraps

redis_client = Redis(host='localhost', port=6379, db=0)

def cache_result(expiration: int = 3600):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            # Create cache key from function name and arguments
            cache_key = f"{func.__name__}:{hash(str(args) + str(kwargs))}"

            # Try to get from cache first
            cached_result = redis_client.get(cache_key)
            if cached_result:
                return json.loads(cached_result)

            # Execute function and cache result
            result = await func(*args, **kwargs)
            redis_client.setex(
                cache_key,
                expiration,
                json.dumps(result, default=str)
            )

            return result
        return wrapper
    return decorator

@cache_result(expiration=1800)  # Cache for 30 minutes
async def get_productivity_analytics(user_id: str):
    # Expensive analytics calculation
    return calculate_detailed_analytics(user_id)
```

### Background Task Processing

```python
from celery import Celery
from datetime import datetime, timedelta

celery_app = Celery('task_manager')

@celery_app.task
def process_ai_analysis(task_id: str):
    """Background task for AI analysis of tasks"""
    task = get_task_by_id(task_id)
    if not task:
        return

    # Perform AI analysis
    ai_assistant = AITaskAssistant()
    analysis = ai_assistant.analyze_task(task.description)

    # Update task with AI insights
    update_task_ai_analysis(task_id, analysis)

    # Generate suggestions
    suggestions = ai_assistant.generate_suggestions(task)
    save_ai_suggestions(task_id, suggestions)

@celery_app.task
def update_productivity_patterns():
    """Daily task to update user productivity patterns"""
    users = get_all_active_users()

    for user in users:
        patterns = calculate_productivity_patterns(user.id)
        update_user_patterns(user.id, patterns)
```

## Key Learnings

Building this AI-powered task management application taught me several important lessons:

1. **AI Integration Complexity**: Integrating AI features requires careful consideration of response times and fallback mechanisms
2. **User Experience**: AI suggestions must be subtle and helpful, not overwhelming
3. **Data Privacy**: Handling personal productivity data requires strict security measures
4. **Performance**: Real-time features demand efficient caching and background processing
5. **Scalability**: The system must handle varying loads of AI processing requests

The combination of modern web technologies with AI capabilities creates a powerful tool that truly adapts to user behavior and improves productivity over time.
