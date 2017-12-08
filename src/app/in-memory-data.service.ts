import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const worker_cards = [
      {"id":"rq:worker:TimWang.22347","name":"TimWang.22347","status":"WorkerStatus.BUSY"},
    ];

    const job_numbers = {"running":0,"enqueue":1,"failure":0,"success":0}

    const worker_table = [
      {"id":"rq:worker:TimWang.22347","name":"TimWang.22347","status":"WorkerStatus.IDLE","pid":22279},
    ];

    const recent_exception_jobs = [
      {"id":"d6ee77af-3d6d-49db-a87a-56c2f74bda07","desc":"__main__.count_words_at_url('http:\/\/nvie.com')","start_time":"2017-11-29 17:43:46.647602","exc_info":"ValueError: 123\nTraceback (most recent call last):\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/worker.py\", line 380, in perform_job\n    rv = job.perform()\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/job.py\", line 286, in perform\n    self._result = self._execute()\n  File \"\/Users\/apple\/kaisa\/sanic-task\/sanic_task\/job.py\", line 293, in _execute\n    return self.func(*self.args, **self.kwargs)\n  File \"\/Users\/apple\/kaisa\/sanic-task\/manage.py\", line 20, in count_words_at_url\n    raise ValueError(123)\nValueError: 123\n"},
    ];

    const workers = {
      "total":1,
      "results":[
        {"id":"rq:worker:TimWang.22858","name":"TimWang.22858","status":"WorkerStatus.IDLE","pid":22279}
      ]
    };

    const queues = {"total":2,"results":[{"id":"rq:queue:default","name":"default","count":0},{"id":"rq:queue:JobStatus.FAILED","name":"JobStatus.FAILED","count":47}]}

    return {
      worker_cards, job_numbers,
      worker_table, recent_exception_jobs, workers, queues};
  }
}