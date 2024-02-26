<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $data = $request->Validated();
        if (!Auth::attempt($data)) {
            return response([
                'message' => 'Check the credentials',
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('Dipika')->plainTextToken;
        return response(compact('user', 'token'), 201);
    }
    public function signup(SignUpRequest $request)
    {
        $data = $request->validated();
        $user = User::create($data);
        $token = $user->createToken('Dipika')->plainTextToken;
        return response(compact('user', 'token'), 201);
    }
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);

    }
}
