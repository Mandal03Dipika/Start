<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth()->user()->id;
        // return TaskResource::collection(Task::all());
        return TaskResource::collection(Task::where('user_id', $user_id)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $data = $request->validated();
        $user_id = auth()->user()->id;
        $data['user_id'] = $user_id;
        // dd($data);
        $task = Task::create($data);
        return response(new TaskResource($task), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new TaskResource(Task::find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $data = $request->validated();
        // $user_id = auth()->user()->id;
        $task->title = $data['title'];
        $task->task = $data['task'];
        $task->date = $data['date'];
        $task->status = $data['status'];
        $task->save();
        return (new TaskResource($task));
    }

    // public function status(StatusRequest $request,Task $task)
    // {

    // }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        $user_id = Auth::id();
        $data = Task::where('user_id', $user_id)->get();
        return response()->json([
            'message' => 'Successful delete',
            'status' => true,
        ]);
    }
}
